function isAlive(aliveState) {
  //Iconos de alive
  const iconClassName = aliveState
    ? "fa-solid fa-heart-pulse"
    : "fa-solid fa-skull-crossbones";
  return iconClassName;
}

export default isAlive;
