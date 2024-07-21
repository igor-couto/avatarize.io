FROM node:latest as builder
COPY ./src /html
RUN npm install -g html-minifier-terser uglify-js clean-css-cli posthtml-cli posthtml-minifier
# Minify HTML files and rename class names
RUN find /html -name '*.html' -exec posthtml --use posthtml-minifier -o {} {} \;
# Minify JavaScript files and obfuscate function names
RUN find /html -name '*.js' -exec uglifyjs --compress --mangle -o {}.min -- {} \; \
    && find /html -name '*.js.min' -exec sh -c 'mv "$0" "${0%.min}"' {} \;
# Minify CSS files and rename class names
RUN find /html -name '*.css' -exec cleancss -o {}.min {} \; \
    && find /html -name '*.css.min' -exec sh -c 'mv "$0" "${0%.min}"' {} \;



FROM nginx:latest 
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /html /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]