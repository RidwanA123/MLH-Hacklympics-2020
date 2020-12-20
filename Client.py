
from socket import AF_INET, socket, SOCK_STREAM
from threading import Thread

#global variables (these will always stay the same)
host= "localhost"
port=5500
buffer_size=512
address=(host, port)

messages=[] #these are the messages that the user receives
def get_msg():
    while True:
        try:
            msg=client_socket.recv(buffer_size).decode()
            messages.append(msg)
            print(msg)
        except Exception as problem:
            print("Something has gone wrong: " + str(problem))
            break

def send_msg(msg):
    client_socket.send(bytes(msg, "utf8"))

    if msg=="{leave}":
        client_socket.close()



client_socket= socket(AF_INET,SOCK_STREAM)
client_socket.connect(address)

get_thread= Thread(target=get_msg)
get_thread.start()
username="Emre"
send_msg(username) #THE INITIAL MESSAGE WE SEND HAS TO BE THE USERNAME, FROM THERE WE CAN SEND THE NORMAL MESSAGES.

n=0
from time import sleep
while True:
    send_msg(input())
    n+=1
    sleep(1)
    
    
