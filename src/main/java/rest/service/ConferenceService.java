package rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.ApplicationScope;
import rest.dal.ConferenceRepository;
import rest.exceptions.ConferenceNotFoundException;
import rest.models.Conference;


import java.util.List;

@Service
@ApplicationScope
public class ConferenceService {

    @Autowired
    private ConferenceRepository conferenceRepository;

    public Conference addConference(Conference conference) {
        return conferenceRepository.save(conference);
    }

    public Conference updateConference(Conference conference) {
        return conferenceRepository.save(conference);
    }

    public List<Conference> getConference() {
        return conferenceRepository.findAll();
    }

    public Conference getConference(Integer id) {
        return conferenceRepository.findById(id).orElse(null);
    }

    public void deleteById(Integer id) {
        conferenceRepository.deleteById(id);
    }
}
