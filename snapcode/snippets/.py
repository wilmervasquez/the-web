# Variables
year = 123
lastName = "Carlos"
ages = [1, 2, 3, 4]
mats = (12, 3, 40)
person = { "name": "Carlos"}
maping = {1, 2, 3, 56, 56, 0}


class ExampleClass:
  #Every function belonging to a class must be indented equally
  def __init__(self):
    name = "example"
  def someFunction(self, a):
    #Notice everything belonging to a function must be indented
    if a > 5:
      return True
    else:
      return False
  
  def get_google_post(): pass

    
#If a function is not indented to the same level it will
def separateFunction(b):
  for i in b:
    #Loops are also indented and nested conditions start a new indentation
    if i == 1:
      return True
    return False
  
separateFunction([2,3,5,6,1])