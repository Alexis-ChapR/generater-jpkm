#!/usr/bin/env node
const mkdirp = require('mkdirp');
const inquirer = require('inquirer');
const fs = require('fs');
const { exec } = require('child_process');

const CodeDefaultIndex = require('./CreateIndex/DefaultText')
const CodeDefaultModel = require('./CreateModel/DefaultText')
const CodeDefaultControllers = require('./CreateControllers/DefaultText')
const CodeDefaultRouters = require('./CreateRouters/DefaultText')
const CodeDefaultHelpers = require('./CreateHelpers/DefaultText')
const CodeDefaultMiddlewares = require('./CreateMiddlewares/DefaultText')

// Función para instalar paquetes necesarios
function installPackages(callback) {
    console.log('Instalando paquetes necesarios...');
  
    exec('npm init -y', (error, stdout, stderr) => {
      if (error) {
        console.error('Error al inicializar el proyecto:', error);
        return;
      }
      console.log('Proyecto inicializado.');
  
      exec('npm install jwt-simple moment mongoose body-parser fs http cors express', (error, stdout, stderr) => {
        if (error) {
          console.error('Error al instalar paquetes:', error);
          return;
        }
        console.log('Paquetes instalados correctamente.');
        callback(); // Llama al callback solo después de instalar las dependencias
      });
    });
}

function GenerateFirstLevel(ProjectName,componentName) {

  // Aquí puedes definir la lógica para crear el componente
  // Por ejemplo, puedes crear directorios y archivos aquí
  const directoryPath = `./${ProjectName}`;
    
  let lowerComponentName = componentName.toLowerCase();
  componentName = lowerComponentName.charAt(0).toUpperCase() + lowerComponentName.slice(1);

    // Crear el directorio
    try {

        // Create the Main directory synchronously (no callback needed)
        fs.mkdirSync(`${directoryPath}`, { recursive: true });

        const defCode = CodeDefaultIndex.CodeForFirstLevel(componentName,"", 1, "", "")

        // Crear archivos dentro del directorio
        fs.writeFile(`${directoryPath}/index.js`, defCode , function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });

    } catch (err) {
    console.error('Error creating directory:', err);
    }

    // Crear el directorio
    try {

        // Create the Models directory synchronously (no callback needed)
        fs.mkdirSync(`${directoryPath}/Models`, { recursive: true });

        const defCode = CodeDefaultModel.CodeForModel(componentName);

        // Crear archivos dentro del directorio
        fs.writeFile(`${directoryPath}/Models/${componentName}Model.js`, defCode, function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });

    } catch (err) {
    console.error('Error creating directory:', err);
    }

    // Crear el directorio
    try {

        // Create the Controllers directory synchronously (no callback needed)
        fs.mkdirSync(`${directoryPath}/Controllers`, { recursive: true });

        const defCode = CodeDefaultControllers.CodeForController(componentName, "" , 1, "", "");

        // Crear archivos dentro del directorio
        fs.writeFile(`${directoryPath}/Controllers/${componentName}Controller.js`, defCode , function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });

    } catch (err) {
    console.error('Error creating directory:', err);
    }

    // Crear el directorio
    try {

        // Create the Routers directory synchronously (no callback needed)
        fs.mkdirSync(`${directoryPath}/Routers`, { recursive: true });

        const defCode = CodeDefaultRouters.CodeForRouters(componentName, "" , 1, "", "");

        // Crear archivos dentro del directorio
        fs.writeFile(`${directoryPath}/Routers/${componentName}Routers.js`, defCode , function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });

    } catch (err) {
    console.error('Error creating directory:', err);
    }

    // Crear el directorio
    try {

        // Create the Helpers directory synchronously (no callback needed)
        fs.mkdirSync(`${directoryPath}/Helpers`, { recursive: true });

        const defCode = CodeDefaultHelpers.CodeForHepler();

        // Crear archivos dentro del directorio
        fs.writeFile(`${directoryPath}/Helpers/jwt.js`, defCode , function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });

    } catch (err) {
    console.error('Error creating directory:', err);
    }

    // Crear el directorio
    try {

        // Create the Middlewares directory synchronously (no callback needed)
        fs.mkdirSync(`${directoryPath}/Middlewares`, { recursive: true });

        const defCode = CodeDefaultMiddlewares.CodeForAuthenticate();

        // Crear archivos dentro del directorio
        fs.writeFile(`${directoryPath}/Middlewares/Authenticate.js`, defCode , function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });

    } catch (err) {
    console.error('Error creating directory:', err);
    }

}

function GenerateSecondLevel(ProjectName, AmbientName ,componentName) {
    // Aquí puedes definir la lógica para crear el componente
    // Por ejemplo, puedes crear directorios y archivos aquí
    const directoryPath = `./${ProjectName}`;

    let lowerComponentName = componentName.toLowerCase();
    componentName = lowerComponentName.charAt(0).toUpperCase() + lowerComponentName.slice(1);

    let lowerAmbientName = AmbientName.toLowerCase();
    AmbientName = lowerAmbientName.charAt(0).toUpperCase() + lowerAmbientName.slice(1);

    // Crear el directorio
    try {
        // Create the Controllers directory synchronously (no callback needed)
        fs.mkdirSync(`${directoryPath}`, { recursive: true });

        const defCode = CodeDefaultIndex.CodeForFirstLevel(componentName, AmbientName, 2, "", "")

        // Crear archivos dentro del directorio
        fs.writeFile(`${directoryPath}/index.js`, defCode , function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });

    } catch (err) {
    console.error('Error creating directory:', err);
    }
    
    // Crear el directorio
    try {
        // Create the Models directory synchronously (no callback needed)
        fs.mkdirSync(`${directoryPath}/Models/${AmbientName}`, { recursive: true });

        const defCode = CodeDefaultModel.CodeForModel(componentName);

        // Crear archivos dentro del directorio
        fs.writeFile(`${directoryPath}/Models/${AmbientName}/${componentName}Model.js`, defCode, function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });

    } catch (err) {
    console.error('Error creating directory:', err);
    }

    // Crear el directorio
    try {
        // Create the Controllers directory synchronously (no callback needed)
        fs.mkdirSync(`${directoryPath}/Controllers/${AmbientName}`, { recursive: true });

        const defCode = CodeDefaultControllers.CodeForController(componentName, AmbientName , 2, "", "");

        // Crear archivos dentro del directorio
        fs.writeFile(`${directoryPath}/Controllers/${AmbientName}/${componentName}Controller.js`, defCode , function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });

    } catch (err) {
    console.error('Error creating directory:', err);
    }

    // Crear el directorio
    try {
        // Create the Controllers directory synchronously (no callback needed)
        fs.mkdirSync(`${directoryPath}/Routers/${AmbientName}`, { recursive: true });

        const defCode = CodeDefaultRouters.CodeForRouters(componentName, AmbientName , 2, "", "");

        // Crear archivos dentro del directorio
        fs.writeFile(`${directoryPath}/Routers/${AmbientName}/${componentName}Routers.js`, defCode , function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });

    } catch (err) {
    console.error('Error creating directory:', err);
    }

    // Crear el directorio
    try {
        // Create the Helpers directory synchronously (no callback needed)
        fs.mkdirSync(`${directoryPath}/Helpers`, { recursive: true });

        const defCode = CodeDefaultHelpers.CodeForHepler();

        // Crear archivos dentro del directorio
        fs.writeFile(`${directoryPath}/Helpers/jwt.js`, defCode , function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });

    } catch (err) {
    console.error('Error creating directory:', err);
    }

    // Crear el directorio
    try {
        // Create the Middlewares directory synchronously (no callback needed)
        fs.mkdirSync(`${directoryPath}/Middlewares`, { recursive: true });

        const defCode = CodeDefaultMiddlewares.CodeForAuthenticate();

        // Crear archivos dentro del directorio
        fs.writeFile(`${directoryPath}/Middlewares/Authenticate.js`, defCode , function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });
        
    } catch (err) {
    console.error('Error creating directory:', err);
    }

}

function GenerateThirdLevel(ProjectName,SectionName, AreaName,componentName) {
    // Aquí puedes definir la lógica para crear el componente
    // Por ejemplo, puedes crear directorios y archivos aquí
    const directoryPath = `./${ProjectName}`;
    const EntityPath = `./${ProjectName}/app/${SectionName}/${AreaName}/${componentName}`;

    let lowerComponentName = componentName.toLowerCase();
    componentName = lowerComponentName.charAt(0).toUpperCase() + lowerComponentName.slice(1);

    let lowerSectionName = SectionName.toLowerCase();
    SectionName = lowerSectionName.charAt(0).toUpperCase() + lowerSectionName.slice(1);

    let lowerAreaName = AreaName.toLowerCase();
    AreaName = lowerAreaName.charAt(0).toUpperCase() + lowerAreaName.slice(1);

    // Crear el directorio
    try {

        // Create the Main directory synchronously (no callback needed)
        fs.mkdirSync(`${directoryPath}`, { recursive: true });

        const defCode = CodeDefaultIndex.CodeForFirstLevel(componentName,"", 3, SectionName, AreaName)

        // Crear archivos dentro del directorio
        fs.writeFile(`${directoryPath}/index.js`, defCode , function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });

    } catch (err) {
    console.error('Error creating directory:', err);
    }

    // Crear el directorio
    try {

        // Create the Main directory synchronously (no callback needed)
        fs.mkdirSync(`${EntityPath}/Models`, { recursive: true });

        const defCode = CodeDefaultModel.CodeForModel(componentName);

        // Crear archivos dentro del directorio
        fs.writeFile(`${EntityPath}/Models/${componentName}Model.js`, defCode, function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });

    } catch (err) {
    console.error('Error creating directory:', err);
    }

    // Crear el directorio
    try {

        // Create the Main directory synchronously (no callback needed)
        fs.mkdirSync(`${EntityPath}/Controllers`, { recursive: true });

        const defCode = CodeDefaultControllers.CodeForController(componentName,"", 3, SectionName, AreaName);

        // Crear archivos dentro del directorio
        fs.writeFile(`${EntityPath}/Controllers/${componentName}Controller.js`, defCode , function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });

    } catch (err) {
    console.error('Error creating directory:', err);
    }

    // Crear el directorio
    try {

        // Create the Main directory synchronously (no callback needed)
        fs.mkdirSync(`${EntityPath}/Routers`, { recursive: true });

        const defCode = CodeDefaultRouters.CodeForRouters(componentName, "" ,3, SectionName, AreaName);

        // Crear archivos dentro del directorio
        fs.writeFile(`${EntityPath}/Routers/${componentName}Routers.js`, defCode , function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });

    } catch (err) {
    console.error('Error creating directory:', err);
    }

    // Crear el directorio
    try {

        // Create the Main directory synchronously (no callback needed)
        fs.mkdirSync(`${directoryPath}/app/tools/Helpers`, { recursive: true });

        const defCode = CodeDefaultHelpers.CodeForHepler();

        // Crear archivos dentro del directorio
        fs.writeFile(`${directoryPath}/app/tools/Helpers/jwt.js`, defCode , function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });

    } catch (err) {
    console.error('Error creating directory:', err);
    }

    // Crear el directorio
    try {

        // Create the Main directory synchronously (no callback needed)
        fs.mkdirSync(`${directoryPath}/app/tools/Middlewares`, { recursive: true });

        const defCode = CodeDefaultMiddlewares.CodeForAuthenticate();

        // Crear archivos dentro del directorio
        fs.writeFile(`${directoryPath}/app/tools/Middlewares/Authenticate.js`, defCode , function (err) {
            if (err) {
                console.error('Error al crear el archivo:', err);
                return;
            }
            console.log(`Componente ${componentName} creado exitosamente!`);
        });

    } catch (err) {
    console.error('Error creating directory:', err);
    }

}

// Preguntar al usuario qué desea hacer
inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Escoge una opción, ¿Qué quieres hacer?',
      choices: ['Generar una Estructura', 'Salir']
    },
  ])
  .then((answers) => {
    if (answers.action === 'Generar una Estructura') {
      inquirer
        .prompt([
            {
                type: 'input',
                name: 'projectName',
                message: '¿Cómo deseas llamar a tu proyecto?'
            }
        ])
        .then((answers) => {
            const ProjectName = answers.projectName;
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'action',
                        message: '¿Qué estructura quisieras generar?',
                        choices: ['Estructura 1er Nivel', 'Estructura de 2do Nivel', "Estructura de 3er Nivel" , 'Salir']
                    }
                ])
                .then((answers) => {
                if (answers.action === 'Estructura 1er Nivel') {
                    inquirer
                        .prompt([
                        {
                            type: 'input',
                            name: 'componentName',
                            message: 'Ingresa el nombre de tu primer Componente:'
                        }
                        ])
                        .then((answers) => {
                            
                            // Instalar paquetes necesarios antes de crear el componente
                            installPackages(() => {
                                // Una vez que los paquetes están instalados, crear el componente
                                GenerateFirstLevel( ProjectName ,answers.componentName);
                            });

                        });
                }else if(answers.action === 'Estructura de 2do Nivel'){
                    inquirer
                        .prompt([
                        {
                            type: 'input',
                            name: 'ambientName',
                            message: 'Ingresa el ambiente/Area de tu primer Componente:'
                        }
                        ])
                        .then((answers) => {
                            
                            const AmbientName = answers.ambientName;
                            
                            inquirer
                                .prompt([
                                {
                                    type: 'input',
                                    name: 'componentName',
                                    message: 'Ingresa el nombre de tu primer Componente:'
                                }
                                ])
                                .then((answers) => {
                                    // Instalar paquetes necesarios antes de crear el componente
                                    installPackages(() => {
                                        // Una vez que los paquetes están instalados, crear el componente
                                        GenerateSecondLevel( ProjectName , AmbientName ,answers.componentName);
                                    });
                                });
                        });
                }else if(answers.action === 'Estructura de 3er Nivel'){
                    inquirer
                        .prompt([
                        {
                            type: 'input',
                            name: 'sectionName',
                            message: 'Ingresa el nombre de la Sección de tu primer Componente:'
                        }
                        ])
                        .then((answers) => {
                            
                            const SectionName = answers.sectionName;
                            
                            inquirer
                                .prompt([
                                {
                                    type: 'input',
                                    name: 'areaName',
                                    message: 'Ingresa el nombre del Área de tu primer Componente:'
                                }
                                ])
                                .then((answers) => {
                                    
                                    const AreaName = answers.areaName;

                                    inquirer
                                        .prompt([
                                        {
                                            type: 'input',
                                            name: 'componentName',
                                            message: 'Ingresa el nombre de tu primer Componente:'
                                        }
                                        ])
                                        .then((answers) => {
                                            // Instalar paquetes necesarios antes de crear el componente
                                            installPackages(() => {
                                                // Una vez que los paquetes están instalados, crear el componente
                                                GenerateThirdLevel( ProjectName , SectionName , AreaName ,answers.componentName);
                                            });
                                        });

                                });
                        });
                }else{
                    console.log('Adiós!');
                }
                });
        })
    } else {
      console.log('Adiós!');
    }
  });
