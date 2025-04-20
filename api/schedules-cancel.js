let schedules = [];

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    schedules = schedules.filter(schedule => schedule.id !== id);
    return res.status(204).end();
  }

  return res.status(405).end();
}
