pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        // stage('Test') {
        //             steps {
        //                 bat 'npm test'
        //             }
        //         }
        //         stage('Deliver') {
        //                     steps {
        //                         bat './jenkins/scripts/deliver.bat'
                             
        //                     }
        //                 }

    }
}