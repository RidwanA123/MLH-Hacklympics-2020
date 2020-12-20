
#Emre Cenk
from socket import AF_INET, socket, SOCK_STREAM
from threading import Thread

#THESE ARE THE GLOBAL VARIABLES THAT WILL BE USED THROUGHOUT THE ENTIRE CODE
host= "localhost"
port=5500
buffer_size=512
ADDRESS=(host, port)

server = socket(AF_INET, SOCK_STREAM)

server.bind(ADDRESS)
connection_num=5

users = []

class user:
    def __init__(self, address, client):
        self.address = address
        self.client = client
        self.name = ""

    def set_name(self, name):
        self.name = name

def send_to_everyone(text, name):
    #this function will broadcast the sent messages to everyone in the room

    for user in users:
        #going through every user to send them the message
        client= user.client
        client.send(bytes(name + ": "+ text, "utf8"))


def client_com(user):
    #This is the thread to handle the messages that the client sends, in this case, the client is a socket
    go=True

    client=user.client


    name = client.recv(buffer_size).decode("utf8")  # the user's name
    joined=f"{name} is in the chat"
    send_to_everyone(joined,"") #Tell everyone who has joined

    user.set_name(name=name)
    print(f"We are starting com with {user.name}")

    while go:
        try:
            msg=client.recv(buffer_size).decode("utf8")

            if msg == "{leave}":
                users.remove(user) #removing user from the array of users
                send_to_everyone(f"{name} has left the chat...","")
                client.close()
                go=False #At this point the user has exited, so we need to stop this thread

            else:

                print(f"{name} : ", msg)
                send_to_everyone(msg, name)
        except Exception as problem:
            print("Something has gone wrong: " + str(problem))
            go=False #some error has happened, therefore we are stopping this thread


def wait_to_connect(server):

    #Wait for a new client to connect. Once connected, start a new thread.
    #going on an infinite loop to wait for connections
    go=True

    while go:

        try:
            client, client_address = server.accept()
            current_user=user(client_address,client)
            users.append(current_user) #appending the user object to the array of users

            print(f"{client_address} has connected!")
            Thread(target=client_com,args=(current_user,)).start() #Starts a thread that waits for the client to send
            # a message


        except Exception as problem:
            print("Something has gone wrong2: " + str(problem))

            go=False

if __name__=="__main__":
    server.listen(connection_num) #listen for 'connection_num' connections
    print("waiting for connection")
    accept_thread=Thread(target=wait_to_connect(server=server), args=(server,)) #there is a comma after server bc the
    # input asks
    # for
    print("done")
