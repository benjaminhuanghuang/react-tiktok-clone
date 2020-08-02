
## Scroll snap
app.css


## Centrialize content
```
  app {
    display: grid;
    place-items: center;
  }
```


## Animation and filter
```
.videoFooter__record{
  animation: spinTheRecord infinite 5s linear;
  height: 50px;
  filter: invert(1)
}

@keyframes  spinTheRecord {
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```