https://www.youtube.com/watch?v=VZbT4I_98_k&t=3000s

docker build -t ai-expense-tracker-backend .

$ docker tag ai-expense-tracker-backend:latest ai-expense-tracker-backend:1.0.0

$ kubectl apply -f k8s/configmap.yaml
configmap/ai-expense-tracker-configmap created

$ kubectl apply -f k8s/secret.yaml
secret/ai-expense-tracker-backend-secret created

$ kubectl apply -f k8s/deployment.yaml
deployment.apps/ai-expense-tracker-backend-deployment created

$ kubectl apply -f k8s/service.yaml
service/ai-expense-tracker-backend-service created

or
$ kubectl apply -f k8s/

$ kubectl get pods
NAME READY STATUS RESTARTS AGE
ai-expense-tracker-backend-deployment-56d75c976b-zjxr2 1/1 Running 0 77s
nginx-deployment-cd54446c4-6whmg 1/1 Running 0 2d1h
nginx-deployment-cd54446c4-mmdhk 1/1 Running 0 2d1h
nginx-deployment-cd54446c4-nsqdm 1/1 Running 0 2d1h

$ kubectl exec -it ai-expense-tracker-backend-deployment-56d75c976b-zjxr2 -- env

$ kubectl get services
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
ai-expense-tracker-backend-service ClusterIP 10.96.23.75 <none> 3000/TCP 9m42s
kubernetes ClusterIP 10.96.0.1 <none> 443/TCP 2d6h
nginx-service ClusterIP 10.96.214.22 <none> 80/TCP 2d1h

// localhost:8000 → Kubernetes Service:3000
$ kubectl port-forward service/ai-expense-tracker-backend-service 8000:3000
Forwarding from 127.0.0.1:8000 -> 5000
Forwarding from [::1]:8000 -> 5000
Handling connection for 8000
Handling connection for 8000
Handling connection for 8000
Handling connection for 8000
Handling connection for 8000
