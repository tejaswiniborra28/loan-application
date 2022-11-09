pipeline {
    agent any
    tools {nodejs "node"}
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
                 stage('e2eTest') {
                    steps {
                        bat 'npm run test:e2e'
                    }
                }
                    stage('Deliver') {
                                steps {
                                    bat 'npm run compile'
                                
                                }
                            }
                        //  stage('Heroku deployment') {
                        //       steps {
                        //         bat 'git push https://heroku:40002b15-46c5-458c-86d7-dcbacd86192b@git.heroku.com/bms-loan.git HEAD:master'
                        //       }
                        // }

    }
}