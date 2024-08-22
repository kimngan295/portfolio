import React from 'react';
import { Box, Button } from '@mui/material';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import cv from '../assets/ltkn.pdf';

const Resume = () => {
    return (
        <Box sx={{ pt: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ mb: 2, width: "100%" }}>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer
                        fileUrl={cv}
                        defaultScale={1.5}
                        style={{
                            border: 'none',
                            width: '100%',
                            height: 'auto',
                            boxShadow: 'none',
                        }}
                    />
                </Worker>
            </Box>
            <Box sx={{ textAlign: "center" }}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    href={cv} 
                    download 
                >
                    Download CV
                </Button>
            </Box>
        </Box>
    );
};

export default Resume;
