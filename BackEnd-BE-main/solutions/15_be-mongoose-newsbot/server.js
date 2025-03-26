import express from 'express';
import connect from './db.js';
import { refresh } from './data.js';
import Job from './Job.js';

await connect();

const app = express();

// Start the interval that fetches new data from the API every 5 minutes
setInterval(refresh, 5 * 60 * 1000);

app.get('/refresh', (req, res) => {
    // Do a refresh every time it is requested
    refresh();
    res.send('OK');
});

app.get('/ai-jobs', async (req, res) => {
    try {
        // Get all jobs from MongoDB
        const jobs = await Job.find({});

        // Filter the jobs list looking for the word "AI" in the title or the text
        const aiJobs = jobs.filter(
            (job) => /AI/i.test(job.title) || /AI/i.test(job.text)
        );

        // Respond with the matches
        res.send(aiJobs);
    } catch (error) {
        res.status(500).send({
            error: 'An error occurred while fetching jobs',
        });
    }
});

// TODO: add endpoint to delete a single job based on its id
app.delete('/jobs/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const delJob = await Job.deleteOne({ originalId: id });
        if (delJob.deletedCount === 0) {
            return res.status(404).json({ error: 'Job not found' });
        }
        res.status(200).json({ message: 'Job deleted successfully', delJob });
    } catch (error) {
        console.error('Error deleting job:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// TODO: add endpoint to delete all jobs
app.delete('/jobs', async (req, res) => {
    try {
        const delJobs = await Job.deleteMany({});
        res.status(200).json({
            message: 'All jobs deleted successfully',
            delJobs,
        });
    } catch (error) {
        console.error('Error deleting jobs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
