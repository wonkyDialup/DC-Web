


# firstName, lastName = input("What is your name?").split()
# print("Your name is {} {}".format(firstName, lastName))

class User:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.addresses = []

    def addresses(self, address):
        self.addresses.append(address)
        print(self.addresses)
        return

    def display_addresses(self):
        print(self.addresses)
        return


class Address(User):
    def __init__(self, street, city, state, zip_code, ):
        # super().__init__()
        self.street = street
        self.city = city
        self.state = state
        self.zip_code = zip_code

justin = User("Justin", "Gibbs")
justinAddress = Address("123 Main", "Atlanta", "GA", "30303")
justin.addresses(justinAddress)





    



