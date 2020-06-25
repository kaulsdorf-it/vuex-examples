import moment from 'moment'

const EventTypes = ['A', 'B', 'C', 'D', 'E', 'F']

const numberOfTypes = EventTypes.length

const getEventType = () => EventTypes[Math.round(Math.random() * (numberOfTypes - 1))]

export default numberOfDates => {
  const day = moment()

  const getNextDay = () => day.add(1, 'days').clone()

  const mapFc = (value, index) => ({
    date: getNextDay(),
    type: getEventType(),
    confirmed: false,
    id: index,
  })

  return Array.from(new Array(numberOfDates), mapFc)
}
