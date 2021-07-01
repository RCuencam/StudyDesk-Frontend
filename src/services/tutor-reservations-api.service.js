import http from './http.common';

class TutorReservationsApiService {
    createReservation(studentId, tutorId, item) {
        return http.post(`/students/${studentId}/tutors/${tutorId}`, {
            platformUrl: item.platformUrl,
            startDateTime: item.startDateTime,
            endDateTime: item.endDateTime,
            qualification: item.qualification,
            description: item.description,
            confirmed: item.constructor
        });
    }
}

export default new TutorReservationsApiService();