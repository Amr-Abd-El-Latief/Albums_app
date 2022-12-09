# Albums App 

Albums is an application for showing Albums with cover of each album, and if you choose certain album, you can see many photos related to this Album, with Album owner name.


## how to setup

    -	Using docker:

            1-	Reach by terminal to the app main folder besides the package.json file
            2-	Run command: docker build -t albums .
            3-	Run Command: docker images
            And make sure image name exist and running
            4-	In terminal run the command:
            docker run -d -p 8092:3000   --name albums-app albums 
            5-	It should be running on port 8092
            
    -	 Using terminal:

            1-	Reach by terminal to the app main folder besides the package.json file
            2-	Run in the terminal:    npm install 
            3-	After terminal finishes installing the application libraries, run command: npm start
            4-	Application would be in the link: http://localhost:3000/
   -     How To run unit test: 
        
            1 - Reach by terminal to the app main folder besides the package.json file.
            2 – in terminal run command:  npm test   
 
             And for Code Covergae: 
          
            3 - npm run test -- --coverage --watchAll=false
              




## Used Libraries

        1-	Reactjs
        2-	Bootstrap
        3-	Jest


## Used Components

        1-	react-modal
