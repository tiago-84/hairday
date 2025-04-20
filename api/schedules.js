let schedules = [];

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(schedules);
  }

  if (req.method === 'POST') {
    const { id, name, when } = req.body;
    const newSchedule = { id, name, when };
    schedules.push(newSchedule);
    return res.status(201).json(newSchedule);
  }

  return res.status(405).end();
}
