## Deployment instructions (GoDaddy File Manager)
1. install: node.js and visual code studio.
2. Open visual studio code and create a new project/folder for DAIL locally.
3. From the header tab, open a new terminal.
4. Enter the following commands: (1) git init (2) git remote add origin https://github.com/vrneal/eti-dail.git (3) git checkout -b master (4) git pull
5. The project should be available locally for you. If there are errors, email me. 
6. confirm installation of node. Enter the following in the terminal: (1) npm -v, and (2) node -v
7. if you see numbers, good, else, email me or reinstall node.
8. edit the text you would like to change (SEE UPDATING TEXT BELOW)
9. save all
10. run - npm run build, this will create a build folder on your computer.
11. upload the contents inside the build folder to the public folder on goDaddy (only contents within the folder, not the build folder itself).


## Deployment instructions (future - git pages)

adding these now, this will make the process much easier so that when I leave it will be far easier to update!


## FILE STRUCTURE

1. to view the main code, please navigate to src --> dail --> pages. This folder contains the main code for the header, case page, and opinion page.
  
2. to make changes to text anywere on the website, please navigate to src --> dail --> constants --> textVariables.js.


## UPDATING TEXT 
1. navigate to src --> dail --> constants --> textVariables.js
2. save your changes.
3. [will finish instructions when I've set up git pages










### Misc: 
Portions of the code use the below stylistic attributes from Creative Tim which are openly available. Where features are used, it is indicated. 
Licensing:
- Copyright 2023 [Creative Tim](https://www.creative-tim.com?ref=readme-mkr)
- Creative Tim [license](https://www.creative-tim.com/license?ref=readme-mkr)
MIT License, Copyright (c) 2017 Creative Tim

