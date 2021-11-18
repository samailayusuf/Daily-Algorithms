var number = function(busStops){
  const inBus = busStops.reduce(
(n, [StepIn, stepOut]) => n + StepIn - stepOut,
0
)
  return inBus
}
