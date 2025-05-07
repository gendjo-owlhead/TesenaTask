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
  environment {
    DOCKER_HOST = 'unix:///var/run/docker.sock'
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