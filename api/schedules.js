export default function handler(req, res) {
    if (req.method === 'POST') {
      res.status(200).json([
        { id: 1, nome: 'Agendamento A', horario: '09:00' },
        { id: 2, nome: 'Agendamento B', horario: '11:00' },
        { id: 3, nome: 'Agendamento C', horario: '15:00' },
      ]);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  