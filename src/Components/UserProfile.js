import { Avatar, Button, Card, CardContent, Link, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link as RouterLink } from 'react-router-dom';

function UserProfile({ userData }) {
  return (
    <Card style={{ display: 'flex', alignItems: 'center', padding: '24px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Avatar alt={`${userData.login} avatar`} src={userData.avatar_url} sx={{ width: 120, height: 120, marginRight: '24px' }} />

      <CardContent style={{ textAlign: 'left', flex: '1' }}>
        <Typography variant="h4" component="div" style={{ marginBottom: '16px', fontWeight: 'bold' }}>
          {userData.name}
        </Typography>

        <Typography variant="body1" color="text.secondary" style={{ marginBottom: '12px' }}>
          Repositories: {userData.public_repos}
        </Typography>

        <Typography variant="body1" color="text.primary">
          <Link href={userData.html_url} target="_blank" rel="noopener noreferrer" color="inherit" underline="hover" display="flex" alignItems="center">
            <GitHubIcon sx={{ marginRight: '4px' }} />
            {userData.html_url}
          </Link>
        </Typography>
      </CardContent>

      <Button component={RouterLink} to="/" variant="outlined" color="primary">
        Go to Home
      </Button>
    </Card>
  );
}

export default UserProfile;