package main

import (
  "fmt"
  "strings"
  "strconv"
  "os"
)

func main() {
  content, err := os.ReadFile("input")
  if err != nil {
    panic(err)
  }

  lines := strings.Split(string(content), "\n")

  count := 0
  for _, line := range lines {
    var left, right byte

    if len(line) == 0 {
      continue
    }

    subloop:
    for _, char := range line {
      if char >= '0' && char <= '9' {
        left = byte(char)
        break subloop
      }
    }

    subloop2:
    for i := len(line) - 1; i >= 0; i-- {
      elem := line[i]
      if elem >= '0' && elem <= '9' {
        right = elem
        break subloop2
      }
    }

    n, err := strconv.Atoi(string([]byte{left, right}))
    if err != nil {
      panic(err)
    }

    count += n
  }

  fmt.Printf("%d\n", count)
}
