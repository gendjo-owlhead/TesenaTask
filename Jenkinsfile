pipeline {
  agent {
    docker {
      image 'mcr.microsoft.com/playwright:v1.43.1-focal'
      args '-u root'
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