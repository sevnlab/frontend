import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function Welcome() {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/signIn');
            return;
        }
        const storedName = localStorage.getItem('name');
        setName(storedName || '');
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        navigate('/signIn');
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    marginTop: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 3,
                }}
            >
                <Typography variant="h4" component="h1" fontWeight="bold">
                    {name ? `${name}님 환영합니다 🎉` : '환영합니다!'}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    로그인에 성공했습니다.
                </Typography>
                <Button variant="outlined" onClick={handleLogout}>
                    로그아웃
                </Button>
            </Box>
        </Container>
    );
}
