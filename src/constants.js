export const UNITS_IMPERIAL = 'Imperial';
export const UNITS_METRIC = 'Metric';
export const LENGTH_CHOICE_RIDGELINE = 'Ridgeline length';
export const LENGTH_CHOICE_HAMMOCK = 'Hammock length';
export const HANG_ANGLE_CHOICES = [5, 15, 20, 30, 45];

export const ACTIONS = {
  CHANGE_UNITS: 'CHANGE_UNITS',
  SET_DISTANCE_BETWEEN_TREES: 'SET_DISTANCE_BETWEEN_TREES',
  SET_LENGTH_CHOICE: 'SET_LENGTH_CHOICE',
  SET_LENGTH: 'SET_LENGTH',
  SET_SIT_HEIGHT: 'SET_SIT_HEIGHT',
  SET_WEIGHT: 'SET_WEIGHT',
  SET_HANG_ANGLE: 'SET_HANG_ANGLE',
};

export const HANG_GRAPHIC_LQIP = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wEEEAGQAZABkAGQAakBkAHCAfQB9AHCAnECowJYAqMCcQOdA1IDBwMHA1IDnQV4A+gEMwPoBDMD6AV4CE0FLQYOBS0FLQYOBS0ITQdTCOMHOga9BzoI4wdTDS8KWgkuCS4KWg0vDzwMywwcDMsPPBJ1EIEQgRJ1Fz4WEhc+Hl8eXyjSEQGQAZABkAGQAakBkAHCAfQB9AHCAnECowJYAqMCcQOdA1IDBwMHA1IDnQV4A+gEMwPoBDMD6AV4CE0FLQYOBS0FLQYOBS0ITQdTCOMHOga9BzoI4wdTDS8KWgkuCS4KWg0vDzwMywwcDMsPPBJ1EIEQgRJ1Fz4WEhc+Hl8eXyjS/8IAEQgCHAM2AwEiAAIRAQMRAf/EABcAAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAIAQEAAAAA0AAAAEUAAJQjQkUARQACKCGjM1nTLSTWdGbG8w3gsNVmazplpmlyapg0y1GmDWalmzDWRYVLNLmazplpJZazY1nTJoy1TM1nTKpQ0EzszGorOjOpLNplbJvM1JSbMwoawG8wWbYNpk2ZhQQs0y0Z2YspWdpnTNaZFk3lWRqmZZYNZss1Ess0zZozZqsyzWRYWaM7TOjNlCaSaZqoTUmosEbMzWbKlms6zZrNEWyDeG2ZrNlQ1moXRgKgsAWCpU0yUudAAAAAAAAAChAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIploAAAAAAAAAAAAAAAGWjLQAABAARQBFAUAAAAAAMtGWgAACQAqACkC50oAABjYy0IARSNAAABAAAAAFAAAMaploYgANGgAAAAAAAAAAABjYmdjEABsoAAAAMQABugAAAAxsTOxiAA2UAAAAGIAA3QAAAAY2JnYxAAaAAAAAJAAFoAAAAJsZaGIADRaAAAAGIAA3QAAAAw2MtDAAlUtAAAADEAAboAAAAZmxloABz6GWgAAAAYgADdAAAABy6jLQMqDOzLQAASgAAAAAAAADl1GWgSBU0ZUAAJoAAAAAAAAAcuoy0BAJoyAAAaAAAAAAECjIAA0IAZ2ZAAAKKBFAAAAMhoZAAFqIDTGzIAAAoAAoAAAQKMgAC0QBjZAAACoBpEGgAACKAZAAFoAOezKgAAaAAAAAARFAgAAtCAY2MaAABoAAAAAAggpAABaARFGOgAASgAAAAAAAIAzQWgCGdDOwAAAAZAALQAAAJRz2I0ASK51pnoAAAADEAAboAAAJDTFpm6AIHOovQAAAAGIAA3QAAikgaYEnSgEDmU6AAGQACQABaAAaIQDTkDoUCBjSM3oAAzoABiAAN0ABnQyBSYB0UBFOW1hGwAZ0AAxAAG6AAggFMo1YtAIpy2uW0xugAAAZAALQACQDRhthVoARTlsjYw2AAAAAAAAGQFGN0w1QAIpy2JsJjdAAAQUAAAAyCiNCKAARTlsZ00GGwAAMaQFEBoAGQ0SaEKAAIpztM7FDDYAAZAKgBoAMmhloQBQARTnaZ6EmgzNgAAAAAAADLQggNAAinLVM9AihhsAAAAAAADGqRQgUAEU5aqToEFEw1oAAAAAABhsRQCKACKctBsIAMjVAAAACAyE2CgZBoAEU50NgCARDYACIgACgUUAhk2ACKc1GwAShkCkIAoAFCFFAAAAEU5izoAABkLlSEKEFpKFhUoAAAoCKcxc9RAAFMipGgZ0y0GQoJsAEBkE6AEU5hOpEABaMkoFAoJkLFNAAmQAz1AIpzBugAADAUCihg0Rm00ABMgBnqARTmDWgAABlAoC0MaESjQACZAIboCKcwXYRANDENEBQsKRTFpNgAEyASzdARTmC7CAFEEEAKAAEA1QCZAJZugIpzBdgAADISKAFEA0gkLWhMgEOgBFMQNKAAKGQIQoAA2AESA2OZSboCKYgLrAAB0DIAJFAA2AACMxUTQbARTEC7cwADoGQAEgAuqAAACTFFNgIYANsAAHQMgAGgyaAAAAByoVsBmNMAnRgAA6BkAA0BnWAANoKAOVKuLdUZWnMDbAAB0DIABoDNwAC7RGgDEBrO2OgQOdVDeQADYZAANAZuAAXaCgHMFGwJDFKll2AAJAAAC0zcAAuwAGJYFTagDCVKbAABICiAWhm4ABdQDQJlBRnqAEyI3QAACQAC0DNwAC6QGgJIAbAAAAAABIAWgZKAAoAAZBVAAAAAAAJAtAAAAAAAAAAAAAAAASWgAAAAAAAAAAAAAAAAAAAAAAAAAP//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKAAEAoAAAgKAAEAUAAAAAABAKAAAAAAlAAAAAAAgAoAAAIAoAgAoAAAIAoAgBQAAAIAoAAAAAAAAAAAAQCgARQAAAAQBQBBQAAAAICgEFAAAAAAACFAAAAAAABCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQgAAARQAABQgAAAQoAABQgAAAQCgAAAAAgFQBQAAAAAgFQBQgKAAAAAQAogKAAAAAQBQgKAAAAAEFAAAAAAAAAAAAA/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oACAEDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKBAAAAAAADQJAABoCQAAA0CSgAFAQAAgKBAABoCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAgAAAFgAAGgJAAAAAAUBQEAQAAAAAFoJAAAABYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECgAAAAAABAoAAAAAAAQKABQEAAAAAAAWgZAAAAAAAWgZAAqgyAAFgKBAAKoMgAAAAAAKoMgAAAAAAAAAAAAAAAAAAD//EAB0QAAIDAQEBAQEAAAAAAAAAAAERABAgMEBQYHD/2gAIAQEAAQIAjcdN24xbEdt223G6bjpumI7by3TcbtuOnHbcbbFNxuOzgQ2KOBRoYPc4ENiGhQyNiHqIaOxxENKCzRoQ2NCjQyMijYwaNCGxDQoQ7OTYoUcGhDRwbFGzZowaOBDBQ4HY2dnAhgoQ4FCGxR0KFCjg2aODRs2bORg4HMYGBpmjQs4GTgUNG2cC3bNnD0bNmjs0eJ0KHiNHiaEOBxWRxOlBDZwIYIaGFElSSiiSipRK0otKJKklFSSylFSStKJKlSpUqSVKL+snJg/QmDBg9Lt5EeXxfzDBgwe0fQOTBlttttmCNwwelRUsrK4ql5TBgweIQwfjTBgweIQwe89x7zkweIQwe89x7zkweIQ02222222222222234G22222222222222zkweIQ0Pce4+IYPEIYIPce4+IYO4wYPee4+IYOAjwYMGDxD8AYOQwYMGCNtttttttv7YyYOxgwYPwB8oweIwYPIPkizg+EYPEYMHsfvVqz4RkcBgweQcx8U+EdDBgwfaPI+EdDBgwRJJJJJJJJfIMNHQh8I6GDBg8Q+mkkklk0uhgwYPgNttttttjwni8HJg5HBptwe89x4ht5MGDByMFm1Q957jzvZgjbg5GCzhsfdHgNKxyMFmC0o+w7nuO46IU8LmYOIt9B3Pcdxb5owdzBxFr2JJJJJJJDwPk7MFrmYOIyn91YVmCLqYOI4P7KwsPwGDiKeV8A5HzzBg5GHp+gbFChB5FleIwYORhaX0lT9Zg4jSeU/vLuYOI4vTfzH4D2MGTZg8Sb9zbbbfwjBg5HNUNKPu23HaSSSWhzGR4DBg0bHVcVHTbwkl9YwYOR5FlcG2247dvq3G223bptt8DBg0fetLKVqjQ+AORgwaPB/OeR1PmMGDofBUfU7HY+YwYMGDB84WYfIehg4mDBgwYPG35H7D0MHEwYMGDB40vKsN5bbbfE9DBxMGDBgwe5+hJJKm3g8jRg4mDBgwYI42222222+qt+xJU28GDAhg4mDBgoQw0vwaSUbMGBDBxMGDBQhhg+KqdJWvUoMCGDiYKdChY+W38QUOJpUYMD5w7Cz1Nixh7GDBQswfMHYeA2LFGCLRgs6FD5g7DzCxwMSwND5Y7DubOBZg5Kx6Vk9Fkdh4zR+cuq2Ow8Zo/QXFcRSSSSSSS/DLK/RKL+Pf/xAAbEAABBAMAAAAAAAAAAAAAAAABIWBwoAAQsP/aAAgBAQADPwB6JK6SMnfdOi2y8jQGOGkx/8QAFBEBAAAAAAAAAAAAAAAAAAAAoP/aAAgBAgEBPwBdH//EAB0RAQEAAQQDAAAAAAAAAAAAABEAATBAUIBgcJD/2gAIAQMBAT8A6ckREel2ZmZ6LkRER8kSIiIjjccpjbY37MzMzr45THnv/9k=';
