pipeline {
    agent {
    // Equivalent to "docker build -f Dockerfile.build --build-arg version=1.0.2 ./build/
        dockerfile {
            filename 'Dockerfile'
            dir '.'
            args '--network decent'
        }
    }
    stages {
        stage('Test') {
            steps {
                sh '/bin/bash'
            }
        }
    }
}