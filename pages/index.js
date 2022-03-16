import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import LayoutFeMain from '../src/components/layouts/LayoutFeMain'
import libJobs from '../lib/jobs'

const styles = {
  boxJob: {
    marginBottom: '1rem'
  },
  scrollTopButton: {
    position: 'absolute',
    bottom: '2rem',
    right: '2rem',
  },
	jobDesc: {
		height: '300px',
		overflowY: 'hidden',
	},
	readMoreBtn: {
		display: 'block',
		width: '100%',
	},
}

function BoxJob( props = { dataJob: null } ) {
  const data = props['dataJob']

	const handleReadMoreBtn = props.handleReadMoreBtn

  return (
    <Card sx={styles.boxJob}>

      <CardContent>
        <Typography variant="h4" gutterBottom>{data.title}</Typography>
        <Typography variant="h5" gutterBottom>Company: {data.company_name}</Typography>
        <Typography variant="h5" gutterBottom>Location: {data.location}</Typography>
				<Box sx={ styles.jobDesc }>
        	<Typography component="p" gutterBottom><div dangerouslySetInnerHTML={{ __html: data.description }}></div></Typography>
      	</Box>
        <Button variant="link" onClick={handleReadMoreBtn} sx={ styles.readMoreBtn }>{"Read more >>"}</Button>
			</CardContent>

      <CardActions>
        <a href={data.url} target="_blank">
					<Button variant="outlined">{"Source Link"}</Button>
				</a>
      </CardActions>

    </Card>
  )
}

BoxJob.propTypes = {
  dataJob: PropTypes.object,
	handleReadMoreBtn: PropTypes.func,
};

function Index(props) {
  const [dataJobs, setDataJobs] = React.useState(props.posts || [])
  const [batch, setBatch] = React.useState(2)

  const handleLoadJobs = async function(e) {
    e.preventDefault()

	  let jobs = dataJobs.slice(), newJobs = [], resJobs

		resJobs = await libJobs.fetchDataJobs( { page: batch } )
		newJobs = resJobs.data

    for (var i = 0; i < newJobs.length; i++) {
      jobs.push(newJobs[i])
    }

    setDataJobs(jobs)

		await setBatch((batch + 1))
  }

	const handleReadMoreBtn = function(e) {
		let targetEl, parentTargetEl, textElement

		e.preventDefault()

		targetEl = e.target
		parentTargetEl = targetEl.parentNode
		textElement = parentTargetEl.querySelector('div')
		
		if (textElement.style.height == '100%') {
			textElement.style.height = '300px'
			targetEl.innerHTML = "Read More >>"

			window.scroll({
				top: parentTargetEl.offsetTop,
				left: 0,
				behavior: 'smooth'
			})		
		} else {
			textElement.style.height = '100%'
			targetEl.innerHTML = "Read Less <<"
		}
	}

  return (
    <LayoutFeMain>
      <Container maxWidth="sm">

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Job List
          </Typography>
          <Divider sx={{ mb: 4 }} />

          {dataJobs && dataJobs.length ? dataJobs.map(function(item, index) {
            return (
              <BoxJob key={index} dataJob={item} handleReadMoreBtn={handleReadMoreBtn}></BoxJob>
            )
          }) : <Typography component="p">No Jobs...</Typography>}
        </Box>

				{dataJobs && dataJobs.length ? (
					<Box sx={{ mb: 4 }}>
						<Button variant="outlined" onClick={handleLoadJobs} fullWidth>Load Jobs</Button>
					</Box>
					) : null
				}

      </Container>
    </LayoutFeMain>
  );
}

Index.propTypes = {
  posts: PropTypes.array,
  links: PropTypes.object,
  meta: PropTypes.object,
};

Index.getInitialProps = async function() {
	try {
		const posts = await libJobs.fetchDataJobs( { page: 1 } )

		return {
			posts: posts.data,
			links: posts.links,
			meta: posts.meta
		}
	} catch (error) {
		return {
			posts: [],
			links: {},
			meta: {}
		}
	}
}

export default Index
