openssl genpkey -algorithm RSA -out key.pem -aes256

openssl req -new -key key.pem -out csr.pem

openssl x509 -req -in csr.pem -signkey key.pem -out cert.pem

openssl x509 -in cert.pem -noout -text
