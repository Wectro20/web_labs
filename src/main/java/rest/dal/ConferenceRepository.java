package rest.dal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rest.models.Conference;

@Repository
public interface ConferenceRepository extends JpaRepository<Conference, Integer> {

}
