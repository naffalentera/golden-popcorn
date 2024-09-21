import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Sidebar from '../../components/Sidebar';
import InputField from '../../components/InputField';  // Pastikan path sesuai

const MovieInputPage = () => {
  const [title, setTitle] = useState('');
  const [altTitle, setAltTitle] = useState('');
  const [year, setYear] = useState('');
  const [country, setCountry] = useState('');
  const [synopsis, setSynopsis] = useState('');
  // const [availability, setAvailability] = useState('');
  const [genres, setGenres] = useState([]);
  const [actors, setActors] = useState([]);
  const [trailerLink, setTrailerLink] = useState('');
  const [award, setAward] = useState('');
  const [poster, setPoster] = useState(null);
  const [posterLink, setPosterLink] = useState('');

  const genreOptions = [
    'Action', 'Adventures', 'Romance', 'Drama', 'Slice of Life', 'Comedy', 'Fantasy', 
    'Horror', 'Mystery', 'Thriller', 'Sci-Fi', 'Historical', 'Documentary', 'Crime', 
    'Family', 'Musical', 'Sports'
  ].sort();

  const yearOptions = Array.from(new Array(50), (val, index) => 1975 + index);
  
  const awardOptions = ['Best Picture', 'Best Actor', 'Best Actress', 'Best Director', 'Best Screenplay'];

  const maxActors = 9;

  const handleGenreChange = (genre) => {
    setGenres(prevGenres =>
      prevGenres.includes(genre)
        ? prevGenres.filter(g => g !== genre)
        : [...prevGenres, genre]
    );
  };

  const handleActorAdd = (actor) => {
    if (actors.length < maxActors) {
      setActors([...actors, actor]);
    }
  };

  const handleActorRemove = (index) => {
    setActors(actors.filter((_, i) => i !== index));
  };

  const handlePosterUpload = (e) => {
    setPoster(URL.createObjectURL(e.target.files[0]));
    setPosterLink(''); // Reset poster link input
  };

  const handlePosterLinkChange = (e) => {
    setPosterLink(e.target.value);
    setPoster(e.target.value); // Set the poster to the URL image
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Container fluid className="mt-3">
      <Row>
        {/* Sidebar */}
        <Col md={2}>
          <Sidebar />
        </Col>

        {/* Main Content */}
        <Col md={10}>
          <Form onSubmit={handleSubmit}>
            <Row>
            <Col>
                <Form.Group>
                  <Form.Label>Poster</Form.Label>
                  <div className="mb-3">
                    {poster ? (
                      <img src={poster} alt="Poster Preview" className="img-fluid mb-3" style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '5px' }} />
                    ) : (
                      <div className="mb-3" style={{
                        width: '100%', 
                        height: '400px', 
                        backgroundColor: '#f0f0f0',
                        borderRadius: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        color: '#ccc',
                      }}>
                        <span>Image Preview</span>
                      </div>
                    )}
                    <Form.Control 
                      type="file" 
                      accept="image/*" 
                      onChange={handlePosterUpload} 
                      className="mb-2"
                    />
                    <Form.Control
                      type="text"
                      placeholder="Or enter image URL"
                      value={posterLink}
                      onChange={handlePosterLinkChange}
                    />
                  </div>
                  <Button className="btn btn-golden" type="submit">Submit</Button>
                </Form.Group>
              </Col>


              <Col md={9}>
                <Row>
                  <Col md={6}>
                    <InputField 
                      label="Title" 
                      type="text" 
                      id="title" 
                      placeholder="Enter title" 
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Col>
                  <Col md={6}>
                    <InputField 
                      label="Alternative Title" 
                      type="text" 
                      id="altTitle" 
                      placeholder="Enter alternative title" 
                      value={altTitle}
                      onChange={(e) => setAltTitle(e.target.value)}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Year</Form.Label>
                      <Form.Control
                        as="select"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                      >
                        <option value="">Select Year</option>
                        {yearOptions.map((year) => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <InputField 
                      label="Country" 
                      type="text" 
                      id="country" 
                      placeholder="Enter country" 
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Synopsis</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={synopsis}
                    onChange={(e) => setSynopsis(e.target.value)}
                  />
                </Form.Group>

                {/* <InputField 
                  label="Availability" 
                  type="text" 
                  id="availability" 
                  placeholder="Enter availability" 
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                /> */}

                <Form.Group className="mb-3">
                  <Form.Label>Add Genres</Form.Label>
                  <Row>
                    {genreOptions.map((genre) => (
                      <Col key={genre} md={4}>
                        <Form.Check
                          type="checkbox"
                          label={genre}
                          checked={genres.includes(genre)}
                          onChange={() => handleGenreChange(genre)}
                        />
                      </Col>
                    ))}
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Add Actors (Up to 9)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search Actor Names"
                    onKeyDown={handleActorAdd}
                  />
                  <Row>
                    {actors.map((actor, index) => (
                      <Col key={index} md={4} className="mb-3">
                        <Card className="h-100">
                          <Card.Body className="d-flex flex-column align-items-center">
                            <div 
                              style={{
                                width: '50px', 
                                height: '70px', 
                                backgroundColor: '#ccc', 
                                borderRadius: '5px',
                                marginBottom: '10px'
                              }}>
                            </div>
                            <Card.Title>{actor}</Card.Title>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => handleActorRemove(index)}
                            >
                              Remove
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Form.Group>              

                <Row>
                  <Col md={6}>
                    <InputField 
                      label="Link Trailer" 
                      type="text" 
                      id="trailerLink" 
                      placeholder="Enter trailer link" 
                      value={trailerLink}
                      onChange={(e) => setTrailerLink(e.target.value)}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Award</Form.Label>
                      <Form.Control
                        as="select"
                        value={award}
                        onChange={(e) => setAward(e.target.value)}
                      >
                        <option value="">Select Award</option>
                        {awardOptions.map((award) => (
                          <option key={award} value={award}>{award}</option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieInputPage;
