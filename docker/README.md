download project files:

`git clone https://github.com/jacklocke/daghe.git`

edit/put your files in configuration folder *./daghe/data/*

build using this Dockerfile:

    docker build -t daghe ./
    
    docker run -d --name dagheStart -p 80:80  -p 443:443 <image_id_build>
    
    

and launch http://127.0.0.1/?id=jack to test


-----

there is also a docker-compose.yaml file that create a ./cfg folder on your computer where put data.json and conf.js files