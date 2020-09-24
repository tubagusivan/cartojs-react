RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8


RUN cd cartodb &&\
    export PATH=$PATH:$PWD/node_modules/grunt-cli/bin &&\
    bundle install &&\
    bundle exec grunt --environment=production

RUN service postgresql start && service redis-server start &&\
    cd cartodb &&\
    bundle exec rake db:create &&\
    bundle exec rake db:migrate &&\
    service postgresql stop && service redis-server stop


ADD ./create_user /cartodb/script/create_user
RUN service postgresql start && service redis-server start && \
        bash -l -c "cd /cartodb && bash script/create_user" && \
        service postgresql stop && service redis-server stop

# CRON
RUN apt-get install -y rsyslog
ADD ./config/autosync_script.sh /home/autosync_script.sh
ADD ./config/autosync /etc/cron.d/autosync

# Give execution rights on the cron job
RUN chmod +x /home/autosync_script.sh
RUN chmod +x /etc/cron.d/autosync

# Create the log file to be able to run tail
RUN touch /tmp/autosync_date.log

# Start Cron
#COPY ./config/entry.sh /etc/cron.d/entry.sh
#RUN chmod 755 /etc/cron.d/entry.sh

ADD ./config/start.sh /
RUN chmod +x /start.sh

EXPOSE 3000 8080 8181

ENV GDAL_DATA /usr/share/gdal/2.1

ADD ./startup.sh /opt/startup.sh
ADD ./config/varnish /etc/default/varnish

VOLUME  ["/var/lib/postgresql", "/var/lib/redis"]

CMD ["/start.sh"]
