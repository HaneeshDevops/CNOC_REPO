pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        // Checkout your source code from GitHub
        git 'https://github.com/HaneeshDevops/CNOC_REPO.git'

      }
    }

    stage('Deploy') {
      environment {
        // Set environment variables for deployment
        DOCKER_HOST='tcp://172.31.26.63:2375'
        
      }
      steps {
        // Stop and remove the existing containers & images
        sh 'docker rm -f cnoc || true'
        sh 'docker rmi cnoc:v1 || true'

        // docker build
        sh 'docker build -t cnoc:v1 .'

        // docker run 
        sh 'docker run -d -p 9090:80 --name=cnoc cnoc:v1'
      }
    }
  }
}
