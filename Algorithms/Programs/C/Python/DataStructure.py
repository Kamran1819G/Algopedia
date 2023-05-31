def main():
    choice = 0
    while choice != 5:
        print("1. List")
        print("2. Tuple")
        print("3. Set")
        print("4. Dictionary")
        print("5. Exit")
        choice = int(input("Enter your choice: "))

        if choice == 1:
            list_ops()
        elif choice == 2:
            tuple_ops()
        elif choice == 3:
            set_ops()
        elif choice == 4:
            dict_ops()
        elif choice == 5:
            print("Exiting...")
        else:
            print("Invalid choice. Please try again.")


def list_ops():
    my_list = []

    while True:
        print("List Operations")
        print("1. Add item")
        print("2. Remove item")
        print("3. Sort list")
        print("4. Display list")
        print("5. Back")
        choice = int(input("Enter your choice: "))

        if choice == 1:
            item = input("Enter item: ")
            my_list.append(item)
        elif choice == 2:
            item = input("Enter item to remove: ")
            if item in my_list:
                my_list.remove(item)
            else:
                print("Item not found.")
        elif choice == 3:
            my_list.sort()
        elif choice == 4:
            print(my_list)
        elif choice == 5:
            break
        else:
            print("Invalid choice. Please try again.")


def tuple_ops():
    my_tuple = ()

    while True:
        print("Tuple Operations")
        print("1. Create tuple")
        print("2. Display tuple")
        print("3. Back")
        choice = int(input("Enter your choice: "))

        if choice == 1:
            items = input("Enter comma-separated items: ")
            my_tuple = tuple(items.split(","))
        elif choice == 2:
            print(my_tuple)
        elif choice == 3:
            break
        else:
            print("Invalid choice. Please try again.")


def set_ops():
    my_set = set()

    while True:
        print("Set Operations")
        print("1. Add item")
        print("2. Remove item")
        print("3. Display set")
        print("4. Back")
        choice = int(input("Enter your choice: "))

        if choice == 1:
            item = input("Enter item: ")
            my_set.add(item)
        elif choice == 2:
            item = input("Enter item to remove: ")
            if item in my_set:
                my_set.remove(item)
            else:
                print("Item not found.")
        elif choice == 3:
            print(my_set)
        elif choice == 4:
            break
        else:
            print("Invalid choice. Please try again.")


def dict_ops():
    my_dict = {}

    while True:
        print("Dictionary Operations")
        print("1. Add key-value pair")
        print("2. Remove key-value pair")
        print("3. Display dictionary")
        print("4. Back")
        choice = int(input("Enter your choice: "))

        if choice == 1:
            key = input("Enter key: ")
            value = input("Enter value: ")
            my_dict[key] = value
        elif choice == 2:
            key = input("Enter key to remove: ")
            if key in my_dict:
                del my_dict[key]
            else:
                print("Key not found.")
        elif choice == 3:
            print(my_dict)
        elif choice == 4:
            break
        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()
