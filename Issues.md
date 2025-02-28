## Frequent Issues

### Not getting the data : solution is to either disable RLS in the table or to configure the property.
```
  async function fetchProblems() {
    try {
      setLoading(true);
      const {data,error} = await supabase.from('Problems').select(`*`);
      if( error ) throw error;
      if( data ) console.log("data from the supabase ",data);

      // Transform the data to match our Problem interface
      const transformedProblems = data.map((problem: any) => ({
        id: problem.id,
        title: problem.title,
        difficulty: problem.difficulty,
        tags: problem.tags,
        category: problem.category,
        description: problem.description,
      }));

      setProblems(transformedProblems);
    } catch (error) {
      console.error('Error fetching problems:', error);
      setError('Failed to load problems');
    } finally {
      setLoading(false);
    }
  }

```