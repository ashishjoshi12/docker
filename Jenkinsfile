pipeline {

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git url:'https://github.com/ashishjoshi12/docker.git', branch:'main'
      }
    }
    
/*      stage("Build image") {
            steps {
                script {
                    myapp = docker.build("ashish84/docker:${env.BUILD_ID}")
                }
            }
        }
    
      stage("Push image") {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                            myapp.push("latest")
                            myapp.push("${env.BUILD_ID}")
                    }
                }
            }
        }
*/
    
    stage('Deploy App') {
      steps {
        script {
         // kubernetesDeploy(configs: "hellowhale.yml", kubeconfigId: "kubeconfig-1")
          kubeconfig(credentialsId: 'kube-certs', serverUrl: 'http://localhost:8080') {
            sh 'kubectl create -f $WORKSPACE/hellowhale.yml'
            sh 'kubectl get pods'
            sh 'kubectl get svc'
            echo 'open  minikube ip and svc port which is 31113 in browser'
            echo 'deployment completed ........'
        }
      }
    }
    }
  }

}
