FROM ubuntu
RUN apt-get update \
	&& apt-get install -y wget \
	&& rm -rf /var/lib/apt/list/*
RUN wget -qO- https://get.docker.com/ | sh
RUN sudo usermod -aG docker your-user
