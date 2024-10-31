package greeting

// Variables
var age int
var year int = 2024
day := 12
const Api = 21

// function public
func Hello (name string) string {
    return hi(name)
}

// function private
func hi (name string) string {
    return "hi " + name
}