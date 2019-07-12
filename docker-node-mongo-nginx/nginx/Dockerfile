FROM nginx:1.13.9-alpine

#
# This defines the site configuration for the local-development nginx.
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]