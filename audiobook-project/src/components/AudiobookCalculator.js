import React, { useState } from 'react';
import { AudiobookPresenter } from '../presenters/AudiobookPresenter';
import { Button, Typography, Container, MenuItem, Select, FormControl, InputLabel, Grid, Paper } from '@mui/material';
import '../styles/AudiobookCalculator.css';

const AudiobookCalculator = () => {
    const [totalHours, setTotalHours] = useState('');
    const [totalMinutes, setTotalMinutes] = useState('');
    const [hoursListened, setHoursListened] = useState('');
    const [minutesListened, setMinutesListened] = useState('');
    const [listeningSpeed, setListeningSpeed] = useState(1);
    const [result, setResult] = useState(null);

    const presenter = new AudiobookPresenter({
        displayResult: (result) => setResult(result),
    });

    const createDropdownOptions = (range) => {
        return Array.from(Array(range + 1).keys()).map((value) => (
            <MenuItem key={value} value={value}>
                {value}
            </MenuItem>
        ));
    };

    return (
        <Container maxWidth="sm" className="container">
            <Paper elevation={3} className="paper">
                <Typography variant="h5" className="typography">
                    Book Percentage Calculator
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormControl fullWidth margin="normal"
                            size="small">
                            <InputLabel>Total Hours</InputLabel>
                            <Select value={totalHours}
                                onChange={(e) => setTotalHours(e.target.value)}
                                label="Total Hours">
                                {createDropdownOptions(50)}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth margin="normal"
                            size="small">
                            <InputLabel>Total Minutes</InputLabel>
                            <Select value={totalMinutes}
                                onChange={(e) => setTotalMinutes(e.target.value)}
                                label="Total Minutes">
                                {createDropdownOptions(59)}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormControl fullWidth margin="normal"
                            size="small">
                            <InputLabel>Hours Listened</InputLabel>
                            <Select value={hoursListened}
                                onChange={(e) => setHoursListened(e.target.value)}
                                label="Hours Listened">
                                {createDropdownOptions(50)}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth margin="normal"
                            size="small">
                            <InputLabel>Minutes Listened</InputLabel>
                            <Select value={minutesListened}
                                onChange={(e) => setMinutesListened(e.target.value)}
                                label="Minutes Listened">
                                {createDropdownOptions(59)}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <FormControl fullWidth margin="normal"
                    className="speed-select"
                    size="small">
                    <InputLabel>Listening Speed</InputLabel>
                    <Select value={listeningSpeed}
                        onChange={(e) => setListeningSpeed(e.target.value)}
                        label="Listening Speed">
                        <MenuItem value={1}>1.0x (Normal Speed)</MenuItem>
                        <MenuItem value={1.1}>1.1x</MenuItem>
                        <MenuItem value={1.2}>1.2x</MenuItem>
                        <MenuItem value={1.3}>1.3x</MenuItem>
                        <MenuItem value={1.4}>1.4x</MenuItem>
                        <MenuItem value={1.5}>1.5x</MenuItem>
                        <MenuItem value={1.6}>1.6x</MenuItem>
                        <MenuItem value={1.7}>1.7x</MenuItem>
                        <MenuItem value={1.8}>1.8x</MenuItem>
                        <MenuItem value={1.9}>1.9x</MenuItem>
                        <MenuItem value={2}>2.0x (Double Speed)</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => presenter.calculatePercentage(totalHours, totalMinutes, hoursListened, minutesListened, listeningSpeed)}
                    className="button"
                    style={{
                        marginTop: '16px',
                        backgroundColor: '#9a5e8e',
                        color: '#fff',
                      }}
                >
                    Calculate Percentage
                </Button>

                {result !== null && (
                    <Typography variant="h6" className="result">
                        You have listened to {result.percentage}% of the book. Approximately {Math.floor(result.timeLeft / 60)} hours and {Math.floor(result.timeLeft % 60)} minutes left.
                    </Typography>
                )}
            </Paper>
        </Container>
    );
};

export default AudiobookCalculator;
