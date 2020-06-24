FROM nginx
RUN rm -rf /usr/share/nginx/html
COPY build/ /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/