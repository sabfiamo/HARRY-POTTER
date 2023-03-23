function isAlive(aliveState) {
  //Iconos de alive
  const iconClassName = aliveState.includes("Viv")
    ? "fa-solid fa-heart-pulse"
    : "fa-solid fa-skull-crossbones";
  return iconClassName;
}

export default isAlive;
