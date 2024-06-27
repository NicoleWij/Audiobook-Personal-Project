import React, { useState, useEffect } from 'react';
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
    const [error, setError] = useState('');

    const presenter = new AudiobookPresenter({
        displayResult: (result) => {
            setResult(result);
            setError(''); // Clear error when result is successfully calculated
        },
        displayError: (error) => {
            setError(error);
            setResult(null); // Clear result when there is an error
        },
        setTotalHours,
        setTotalMinutes,
        setHoursListened,
        setMinutesListened,
        setListeningSpeed,
    });

    useEffect(() => {
        presenter.retrieveData();
    }, []);

    const createDropdownOptions = (range) => {
        return Array.from(Array(range + 1).keys()).map((value) => (
            <MenuItem key={value} value={value}>
                {value}
            </MenuItem>
        ));
    };

    const createListeningSpeedOptions = () => {
        const speeds = [
            { value: 1, label: '1.0x (Normal Speed)' },
            { value: 1.1, label: '1.1x' },
            { value: 1.2, label: '1.2x' },
            { value: 1.3, label: '1.3x' },
            { value: 1.4, label: '1.4x' },
            { value: 1.5, label: '1.5x' },
            { value: 1.6, label: '1.6x' },
            { value: 1.7, label: '1.7x' },
            { value: 1.8, label: '1.8x' },
            { value: 1.9, label: '1.9x' },
            { value: 2, label: '2.0x (Double Speed)' }
        ];

        return speeds.map((speed) => (
            <MenuItem key={speed.value} value={speed.value}>
                {speed.label}
            </MenuItem>
        ));
    };

    return (
        <Container maxWidth="sm" className="container">
            <Paper elevation={3} className="paper">
                <Typography variant="h5" className="title">
                    Book Percentage Calculator
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormControl fullWidth margin="normal" size="small">
                            <InputLabel>Total Hours</InputLabel>
                            <Select value={totalHours} onChange={(e) => presenter.handleTotalHoursChange(e.target.value)} label="Total Hours" className="selector">
                                {createDropdownOptions(50)}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth margin="normal" size="small">
                            <InputLabel>Total Minutes</InputLabel>
                            <Select value={totalMinutes} onChange={(e) => presenter.handleTotalMinutesChange(e.target.value)} label="Total Minutes" className="selector">
                                {createDropdownOptions(59)}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormControl fullWidth margin="normal" size="small">
                            <InputLabel>Hours Listened</InputLabel>
                            <Select value={hoursListened} onChange={(e) => presenter.handleHoursListenedChange(e.target.value)} label="Hours Listened" className="selector">
                                {createDropdownOptions(50)}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth margin="normal" size="small">
                            <InputLabel>Minutes Listened</InputLabel>
                            <Select value={minutesListened} onChange={(e) => presenter.handleMinutesListenedChange(e.target.value)} label="Minutes Listened" className="selector">
                                {createDropdownOptions(59)}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <FormControl fullWidth margin="normal" size="small">
                    <InputLabel>Listening Speed</InputLabel>
                    <Select value={listeningSpeed} onChange={(e) => presenter.handleListeningSpeedChange(e.target.value)} label="Listening Speed" className="selector">
                        {createListeningSpeedOptions()}
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => presenter.calculatePercentage(totalHours, totalMinutes, hoursListened, minutesListened, listeningSpeed)}
                    className="button"
                >
                    Calculate Percentage
                </Button>

                {error && (
                    <Typography variant="h6" className="error">
                        {error}
                    </Typography>
                )}

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
