pipeline {
  agent any

  // <<– ADD THIS
  environment {
    PATH = "/usr/local/bin:${env.PATH}"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Inspect Docker image') {
      steps {
        sh 'which docker'   // should now print /usr/local/bin/docker
        sh 'docker inspect -f . mcr.microsoft.com/playwright:v1.43.1-focal'
        sh 'docker pull mcr.microsoft.com/playwright:v1.43.1-focal'
      }
    }

    // … your other stages …
  }

  post {
    always {
      junit 'path/to/*.xml'
    }
  }
}
pipeline {
  agent {
    docker {
      image 'mcr.microsoft.com/playwright:v1.43.1-focal'
      args '-u root'
      // Explicitly set the Docker binary path if needed
      // Example: toolName 'docker'
      // Example: dockerToolName 'docker'
      // If Jenkins requires DOCKER_HOST or a custom path, set it in environment
    }
  }
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }
    stage('Run Playwright tests') {
      steps {
        sh 'npx playwright test'
      }
    }
    stage('Archive Playwright report') {
      steps {
        archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
      }
    }
  }
  post {
    always {
      junit 'playwright-report/*.xml'
    }
  }
} 