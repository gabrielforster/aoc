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

  numberTokens := []string{
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  }

  count := 0
  for _, line := range lines {
    var left, right byte

    if len(line) == 0 {
      continue
    }

    subloop:
    for i := 0; i < len(line); i++ {
      elem := line[i]
      if elem >= '0' && elem <= '9' {
        left = elem
        break subloop
      }

      for n, token := range numberTokens {
        if i+len(token) >= len(line) {
          continue
        }

        if line[i:i+len(token)] == token {
          left = byte(n+1) + '0'
          break subloop
        }
      }
    }

    subloop2:
    for i := len(line) - 1; i >= 0; i-- {
      elem := line[i]
      if elem >= '0' && elem <= '9' {
        right = elem
        break subloop2
      }

      for n, token := range numberTokens {
        if i-len(token) < 0 {
          continue
        }

        if line[i-len(token)+1:i+1] == token {
          right = byte(n+1) + '0'
          break subloop2
        }
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
