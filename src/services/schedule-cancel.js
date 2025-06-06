export async function scheduleCancel({ id }) {
    try {
      await fetch(`/api/schedules/[id]/${id}`, {
        method: 'DELETE',
      });
  
      alert("Agendamento cancelado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Não foi possível cancelar o agendamento!");
    }
  }
  
