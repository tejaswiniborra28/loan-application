pipeline {
    agent any
    tools {nodejs "node"}
    environment {
    HEROKU_API_KEY = credentials('heroku-api-key')
    }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
                    steps {
                        bat 'npm test --verbose'
                    }
                }
                stage('Deliver') {
                            steps {
                                bat './jenkins/scripts/deliver.bat'
                             
                            }
                        }
                         stage('Herku login') {
                              steps {
                                bat 'echo $HEROKU_API_KEY | npx Heroku login'
                              }
                        }
                                       stage('Push to Heroku registry') {
                                                    steps {
                                                   bat 'git push https://git.heroku.com/bms-loan.git master'
       
                                                }
                                            }

    }
}