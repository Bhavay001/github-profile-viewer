import React, { useState, useEffect, useMemo } from 'react';
import { getRepositories } from '../Services/gihubService.js';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import Pagination from './Pagination.js';

const PageSize = 10;
function RepositoryList({ username, searchTerm }) {
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getRepositories(username, searchTerm)
      .then((data) => setRepositories(data))
      .catch((error) => console.error('Error fetching repositories:', error));
  }, [username, searchTerm]);

  const paginatedRepositories = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return repositories.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, repositories]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Box mx={4}>
      <Typography variant="h5" gutterBottom style={{ marginLeft:'20px', marginTop:'15px', marginBottom: '16px', color: '#1976D2' }}>
        Repositories
      </Typography>
      <Grid container spacing={2}>
        {paginatedRepositories.map((repo) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={repo.id}>
            <Card
              style={{
                border: '2px solid #1976D2',
                borderRadius: '8px',
                marginBottom: '16px',
                height: '100%',
                maxWidth: '300px',
                margin: '0 auto',
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div" style={{ color: '#1976D2', marginBottom: '8px' }}>
                  {repo.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ marginBottom: '12px' }}>
                  {repo.description || 'No description'}
                </Typography>
                {repo.language && (
                  <Button variant="contained" size="small" style={{ backgroundColor: '#1976D2', color: 'white', textAlign: 'left', width: '100%' }}>
                    {repo.language}
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={repositories.length}
        pageSize={PageSize}
        onPageChange={handlePageChange}
      />
    </Box>
  );
}

export default RepositoryList;