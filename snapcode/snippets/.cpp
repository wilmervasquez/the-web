#include <iostream>
#include <conio.h>
#include <string>
using namespace std;

struct Book {
  int edad;
  string name = "Def";
  string lastName = "Def";

  Book(
    string name, 
    string lastName, 
    int edad
  ): name(name), lastName(lastName), edad(edad) {

  }

  Book &operator=(const Book &other) {
    edad = other.edad;
    name = other.name;
    lastName = other.lastName;

    return *this;
  }
};

struct Client {
  int id;
  char name[50];
  char email[50];
};

struct Store {
  int id;
  char name[20];
  Client clients; 
} str1, str2, str3;

int main() {
  Book people1("juan","diego",12);
  Book people2("juan","diego23",12);

  struct Client clt1, clt2;
  cout << people1.lastName << people1.edad << endl;
  getch();
  return 0;
}