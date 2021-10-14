package rest.controllers;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rest.exceptions.ConferenceNotFoundException;
import rest.models.Conference;
import rest.service.ConferenceService;


import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping(path = "/conference")

public class ConferenceController {
    private static final Logger LOGGER = LoggerFactory.getLogger(ConferenceController.class);

    @Autowired
    private ConferenceService conferenceService;

    @GetMapping(path = "/{id}")
    public ResponseEntity<Conference> getConference(@PathVariable(name = "id") Integer id) {
        if (conferenceService.getConference(id) == null) {
            LOGGER.info("Can't update an item with non-existing id" + id);
            throw new ConferenceNotFoundException("Item with id: " + id + " not found");
        }
        LOGGER.info("Successfully gave an object:" + id);
        return new ResponseEntity<Conference>(conferenceService.getConference(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Conference>> getConference() {
        LOGGER.info("Successfully gave an objects");
        return new ResponseEntity<List<Conference>>(conferenceService.getConference(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Conference> createConference(@Valid @RequestBody Conference conference) {
        LOGGER.info("Success added item");
        return new ResponseEntity<Conference>(conferenceService.addConference(conference), HttpStatus.OK);
    }

    @PutMapping(path="/{id}",consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Conference> updateConference(@PathVariable("id")final int id, @Valid @RequestBody final Conference conference) {
        if (conferenceService.getConference(id) == null) {
            LOGGER.info("Can't update Item without id - null value was passed instead of it");
            throw new ConferenceNotFoundException("Technique with id: " + id + " not found");
        }
        LOGGER.info("Updated an item with id: " + id);
        conference.setId(id);
        return new ResponseEntity<Conference>(conferenceService.updateConference(conference), HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Conference> deleteConference(@PathVariable("id") Integer id) {
        if (conferenceService.getConference(id) == null) {
            LOGGER.info("Can't delete Item ");
            throw new ConferenceNotFoundException("Technique with id: " + id + " not found");
        }
        LOGGER.info("Successfully deleted Item witn id: " +id);
        conferenceService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
